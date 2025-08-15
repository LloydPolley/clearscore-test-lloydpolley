export type ModalData = {
  onTrack: boolean;
  isOnTrackText: string;
};

export type Detail = {
  title: string;
  description: string;
};

export type FetchedData = {
  title: string;
  onTrackDescription: string;
  offTrackDescription: string;
  details: Detail[];
};

export interface CustomModalEvent extends Event {
  detail?: ModalData;
}
