//staramy się przenieść całą logikę do modułu

//definiujemt klasę Article i wysyłamy od razu
export class Article {
  title: string;
  link: string;
  votes: number;
// instrukcja stworzenia obiektu
  constructor(title: string, link: string, votes?:number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }
//ta funkcja liczy kliknięcia
  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  domain():string {
    try {
      const domainAndPath: string = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    } catch (err){
      return null;
    }
  }
}
