import { Component, OnInit } from '@angular/core';
import { Owner } from './owner';
import { Pet } from 'src/app/owners/pet';
import { OwnerService } from 'src/app/owner.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {
  catsByFemaleOwners: string[] = [];
  catsByMaleOwners: string[] = [];
  owners: Owner[] = [];

  getOwners(): void {
    this.ownerService.getOwners()
        .subscribe(owners => {
            this.owners = owners;
            this.catsByFemaleOwners = this.selectCatsbyGender('Female');
            this.catsByMaleOwners = this.selectCatsbyGender('Male');
          }) ;
  }

  selectCatsbyGender = function(gender: string) {
    const list: string[] = [];

    const petsbyOwner = this.owners.filter(x => x.gender === gender).map(i => i.pets);

    petsbyOwner.forEach(pets => {
      if (pets !== null) {
        pets.forEach(pet => {
          if (pet !== null && pet.type.toLowerCase() === 'cat' && !list.includes(pet.name)) {
            list.push(pet.name);
            }
        });
      }
    });

    return list.sort();
    };

constructor(private ownerService: OwnerService) {}

  ngOnInit() {
    this.getOwners();
  }
}
