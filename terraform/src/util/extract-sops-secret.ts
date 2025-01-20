import { execSync } from "child_process";

export function extractSopsSecret(path: string, key: string): string {
  try {
    const command = `sops --extract '${key}' --decrypt ${path}`;
    const output = execSync(command, { encoding: "utf-8" }).trim();
    return output;
  } catch (error) {
    throw new Error(`Failed to decrypt secret: ${error}`);
  }
}
