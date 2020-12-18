export enum ToonCategory{
  DAILY,
  GAG,
  PHANTASY,
  ACTION,
  DRAMA,
}

export const ToonLinks:{[key in ToonCategory]:string} = {
  [ToonCategory.DAILY]: 'daily',
  [ToonCategory.GAG]: 'gag',
  [ToonCategory.PHANTASY]: 'phantasy',
  [ToonCategory.ACTION]: 'action',
  [ToonCategory.DRAMA]: 'drama',
};
