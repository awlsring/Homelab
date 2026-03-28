import { existsSync, readFileSync } from "fs";
import { resolve } from "path";

export interface NFSConfiguration {
  readonly machine: string;
  readonly ipv4: string;
  readonly mountPath: string;
}

export interface StorageConfiguration {
  readonly nfs: Record<string, NFSConfiguration>;
}

export interface Configuration {
  readonly storage: StorageConfiguration;
}

interface InventoryMachine {
  readonly ipv4: string;
}

interface InventoryStorageNfs {
  readonly machine: string;
  readonly mountPath: string;
}

interface Inventory {
  readonly machines: Record<string, InventoryMachine>;
  readonly storage: {
    readonly nfs: Record<string, InventoryStorageNfs>;
  };
}

function loadInventory(): Inventory {
  const inventoryPath = [
    resolve(process.cwd(), "inventory.json"),
    resolve(__dirname, "../../../inventory.json"),
    resolve(__dirname, "../../../../inventory.json"),
  ].find((candidate) => existsSync(candidate));

  if (!inventoryPath) {
    throw new Error("Unable to locate inventory.json");
  }

  return JSON.parse(readFileSync(inventoryPath, "utf8")) as Inventory;
}

const inventory = loadInventory();

function getMachineFromInventory(hostname: string): InventoryMachine {
  for (const [key, value] of Object.entries(inventory.machines)) {
    if (key === hostname) {
      return value;
    }
  }
  throw new Error(`Machine ${hostname} not found in inventory`);
}

function loadStorageConfiguration(): StorageConfiguration {
  const cfg: StorageConfiguration = {
    nfs: {},
  };

  Object.entries(inventory.storage.nfs).forEach(([key, value]) => {
    cfg.nfs[key] = {
      machine: value.machine,
      ipv4: getMachineFromInventory(value.machine).ipv4,
      mountPath: value.mountPath,
    };
  });

  return cfg;
}

export function loadConfigurationFromInventory(): Configuration {
  return {
    storage: loadStorageConfiguration(),
  };
}
