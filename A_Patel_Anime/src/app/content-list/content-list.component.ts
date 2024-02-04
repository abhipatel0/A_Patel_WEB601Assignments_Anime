import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  displayContentInfo(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

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
      }
    ];
  }
 
}