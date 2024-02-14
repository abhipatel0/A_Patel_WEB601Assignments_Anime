import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { FilterContentPipe } from '../filter-content.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, FilterContentPipe, FormsModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  DisplayContentInformation(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

  searchTitle: string = '';
  contentExists: boolean = false;
  message: string = '';  
  selectedTitle: string | null = null;

  checkContentExists() {
    const foundItem = this.contentItems.find(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
    this.contentExists = !!foundItem;
    this.message = foundItem ? 'Content item exists.' : 'Content item does not exist.';
    this.selectedTitle = foundItem ? foundItem.title : null;
  }
  ngOnInit(): void {
    this.contentItems =[
      {
        id: 0,
        title: "Naruto",
        description:"Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
        creator:"	Masashi Kishimoto",
        imgURL:"https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
        type:"Adventure",
        tags: ["adventure", "comedy"]
      },
      {
        id: 1,
        title: "One Piece",
        description:"One Piece (stylized in all caps) is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997, with its individual chapters compiled in 107 tankōbon volumes as of November 2023.",
        creator:"Eiichiro Oda",
        imgURL:"https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
        type:"Adventure",
        tags: ["adventure", "drama"]
      },
      {
        id: 2,
        title: "One-Punch Man",
        description:"One-Punch Man is a Japanese superhero manga series created by One. It tells the story of Saitama, a superhero who, because he can defeat any opponent with a single punch, grows bored from a lack of challenge. One wrote the original webcomic manga version in early 2009.",
        creator:"One",
        imgURL:"https://upload.wikimedia.org/wikipedia/en/c/c3/OnePunchMan_manga_cover.png",
        type:"Action",
        tags: ["action", "drama"]
      },
      {
        id: 3,
        title: "Jujutsu Kaisen",
        description:"Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since March 2018, with its chapters collected and published in 25 tankōbon volumes as of January 2024.",
        creator:"Gege Akutami",
        imgURL:"https://upload.wikimedia.org/wikipedia/en/4/46/Jujutsu_kaisen.jpg",
        type:"Adventure",
        tags: ["adventure", "dark fantesy"]
      },
      {
        id: 4,
        title: "Death Note",
        description:"Death Note (stylized in all caps) is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from December 2003 to May 2006, with its chapters collected in 12 tankōbon volumes.",
        creator:"Tsugumi Ohba",
        imgURL:"https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg",
        type:"Action",
        tags: ["action", "mystery"]
      },
      {
        id: 5,
        title: "Tokyo Ghoul",
        description:"Tokyo Ghoul (Japanese: 東京喰種トーキョーグール, Hepburn: Tōkyō Gūru) is a Japanese dark fantasy manga series written and illustrated by Sui Ishida. It was serialized in Shueisha's seinen manga magazine Weekly Young Jump from September 2011 to September 2014, with its chapters collected in 14 tankōbon volumes",
        creator:"	Sui Ishida",
        imgURL:"https://upload.wikimedia.org/wikipedia/en/e/e5/Tokyo_Ghoul_volume_1_cover.jpg",
        type:"Action",
        tags: ["action", "dark fantasy"]
      },
      {
        id: 6,
        title: "Attack on Titan",
        description:"Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. 'The Advancing Giant') is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans.",
        creator:"	Hajime Isayama",
        imgURL:"https://upload.wikimedia.org/wikipedia/en/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg",
        type:"Action",
        tags: ["action", "dark fantasy"]
      }
    ];
  }
 
}