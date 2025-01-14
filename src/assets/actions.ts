export function goNewTab(url: string){
  window.open(url,'_blank')?.focus();
}