import FileSaver from "file-saver";
export async function handleDownload(id, img) {
  FileSaver.saveAs(img, `download_${id}.jpg`);
}
