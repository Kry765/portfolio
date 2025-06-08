export interface DiplomaEntry {
  diplomaSectionTitle: string;
  diplomaImage: DiplomaListImage[];
}

export interface DiplomaListImage {
  key: string;
  source: string;
  alternative: string;
}
