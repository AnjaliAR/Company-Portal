import { Injectable } from '@angular/core';
import { Company } from './company.model';


@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private company: Company[] = [
    new Company(
      'https://yt3.ggpht.com/ytc/AKedOLRrH_wT7RwStCNum43bUnEavYBJNISAWhmMJgJWOg=s900-c-k-c0x00ffffff-no-rj',
      'https://miro.medium.com/max/1400/1*yaZ-u-EiZ6kanJP9zPFXVQ.jpeg',
      'Figma',
      'A design platform for those who build products together',
      'Design',
      'San Fancisco CA',
      100000,
      'Figma is the open design company founded in 2012 by Dylan Field and Evan Wallace. With our cloud-based screen design tool, teams achieve a shared understanding',
      'https://www.figma.com/careers/',
      3000000
    ),
    new Company(
      'https://media-exp1.licdn.com/dms/image/C4D0BAQE6ES80K3TmDw/company-logo_200_200/0/1594059882721?e=2159024400&v=beta&t=a58gen9S12MySMBz-05JH0oh1CiZDgppOGwuXYhl8nI',
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAllBMVEX/M2b////8////J2D/Hlv9yNX9t8b+kqn9NGb9epf+MWT+YIP/HFv/MmX+Mmf/Jl/96Ov9RHH7ma769Pb9M2v4cI/7iaL9kKr61d7/EVj97/P8ZYn73uX8Snb6lKn7hJ790Nv6c436VHr9gJj9UX/9fp78ZY33rLz9X4D/AEz5wMz4aYn8R3T6orb62uP7ydT7s8X5n68rMfr5AAAD4ElEQVR4nO3ZbXPaOBSGYescxZGFkExsKDbmJSRZNwSS8P//3B7Z0P1Cti87E9r1c00Jg0Nn4B5bkpUkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPifsnzZ+Nof7E/geXl7wWq1ZnPtz/YHsCNSlxA1Gv2+S+8u55OAU772h/v96ZsP6inKkO+7kO8/OeejzYaQ76ed86VVlRLy/axzvjvtbj/KNz5NwePEJ3E1aOTZnI6cDHWS7vORKrKskCdZsKhzxYc+n7HGe+u9xGKOneRFX8tatonx8R3yZNkML2KXLzbr9Cn7fvTU5bNlWcojvtW/3JeO+yM+Ybd9yEot6RI5oH324MPg+vVnX/o42j7S03b0mO8m1bSgcz/DfxHNZGn9wKGNgfMZ70mt2OusjtHnezZcUDqLvzyGa3+dz9bn+1pZfqFntuXxWduwpu4s3LjE6J0q+CupTN9Jq7milCdKfQnxJdWF/NharlXe/Y/hzTZ9vvkuhLaYr9i8NHNvJ/3ZR5OxCUStlrMvqxpqn53fB7+XfHpB9Lqv3FpR7SQfHZiPRBt97e/zyU4z747da7xavcwf91yeRr9V4DXRkkdK8uWqWbpgjY1nX/WmCm+TsUzXNHU1Nc7aqlG5u/b3+WSnmXcdvJxtJU8l3JIXXb5CNc7NaV7ZmM/Fq7W5M9znq1WqZQIee6VayZcGuc5vBptvz1NFeRXelaqrcOgu3YOibSnjme3ycVgVcVJe65hPZotDiAsVV9Cua2kSGSYHmi8mI5Wya2RuCO41LmFomtNhRYUzfb4k6MV7HBAl360U2zhZ8tlS0dHFfMlw89FOawm3tzLo0VMoKZVFirq/U3kjJ5nv87Fmq70Mdd3F+0600JarVtEyDDyffHveNItgpzK+LXiScxpv2sq4mC5t0udbbWYTKzPJtlu4TOKN3nK0I5JJe+j58oqr52NVtXL2tRU/xy1oyqqbbu3X59t3Ix/RW+jy8SK2lccmeD7lG+zUoeZf7pq8bet4Jaeztt8yCIu6jlvOdpvn02BX86LIDzLzNs3aJjxJ66J4nQU5OzfNQe43Qtu8De2249t+3z87LUTnHRcr67z4JuucrPGCs96FsbzSXtYsNsgtbuC42xJc98R6cH8eubTb/C2f7/dQjDHdHos8ZLLtXsfDvvsnR/tm8h7f/XpI3M2HfyrK7LU/3O9P/0u+od3//wKbfVBPFaj3A/glvaid2KENZL/AG6svCnaAe+8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/kbSfg3o85S07sAAAAASUVORK5CYII=',
      'Invison',
      'A design platform for those who build products together',
      'Internet',
      'Avenue Suit NY',
      100400,
      'InVision is the platform for inclusive collaboration within digital product design and development',
      'https://www.invisionapp.com/company',
      40000
    ),
    new Company(
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_gserv9NBJXG7CcBYn_D5tH8uzpbDOxbQLQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyg2Rx0O-HMpmoQHAlesNBFk8htHBvAQUm5w&usqp=CAU',
      'Sketch',
      'Tools that help your work shine',
      'Design',
      'Eindhoven, NL',
      100700,
      'Sketch is the home for your entire collaborative design process. From early ideas to pixel-perfect artwork, playable prototypes and developer handoff.',
      'https://www.sketch.com/',
      100000000
    ),
  ];
  constructor() {}
  getCompany() {
    return this.company.slice();
  }
  getCompanies(index: number) {
    return this.company.slice()[index];
  }
}
