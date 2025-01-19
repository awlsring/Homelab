import * as inventory from "../../../inventory.json";

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

function getMachineFromInventory(hostname: string): any {
  for (const [key, value] of Object.entries(inventory.machines)) {
    if (key === hostname) {
      return value;
    }
  }
  throw new Error(`Machine ${hostname} not found in inventory`);
}

function loadStorageConfiguration(): StorageConfiguration {
  const cfg: Record<string, any> = {
    nfs: {},
  };

  Object.entries(inventory.storage.nfs).forEach(([key, value]) => {
    cfg.nfs[key] = {
      machine: value.machine,
      ipv4: getMachineFromInventory(value.machine).ipv4,
      mountPath: value.mountPath,
    };
  });

  return cfg as StorageConfiguration;
}

export function loadConfigurationFromInventory(): Configuration {
  return {
    storage: loadStorageConfiguration(),
  };
}