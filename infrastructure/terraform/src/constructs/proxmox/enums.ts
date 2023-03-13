export enum Memory {
  GB_1 = 1024,
  GB_2 = (GB_1 * 2),
  GB_3 = (GB_1 * 3),
  GB_4 = (GB_1 * 4),
  GB_5 = (GB_1 * 5),
  GB_6 = (GB_1 * 6),
  GB_7 = (GB_1 * 7),
  GB_8 = (GB_1 * 8),
  GB_10 = (GB_1 * 10),
  GB_12 = (GB_1 * 12),
  GB_14 = (GB_1 * 14),
  GB_16 = (GB_1 * 16),
}

export enum StorageSizeOld {
  GB_10 = "10G",
  GB_20 = "20G",
  GB_30 = "30G",
  GB_40 = "40G",
  GB_50 = "50G",
  GB_60 = "60G",
  GB_70 = "70G",
  GB_80 = "80G",
  GB_90 = "90G",
  GB_100 = "100G",
  GB_110 = "110G",
  GB_490 = "490G"
}

export enum StorageSize {
  GB_10 = 10,
  GB_20 = 20,
  GB_30 = 30,
  GB_40 = 40,
  GB_50 = 50,
  GB_60 = 60,
  GB_70 = 70,
  GB_80 = 80,
  GB_90 = 90,
  GB_100 = 100,
  GB_150 = 150,
  GB_200 = 200,
  GB_250 = 250,
  GB_300 = 300,
  GB_350 = 350,
  GB_400 = 400,
  GB_450 = 450,
  GB_500 = 500,
}

export enum OsType {
  UBUNTU = "ubuntu",
  CENTOS = "centos",
  CLOUD_INIT = "cloud-init"
}

export enum SCSIController {
  LSI = "lsi",
  LSI53C810 = "lsi53c810",
  MEGASAS = "megasas",
  PVSCSI = "pvscsi",
  VIRTIO_SCSI_PCI = "virtio-scsi-pci",
  VIRTIO_SCSI_SINGLE = "virtio-scsi-pci",
}