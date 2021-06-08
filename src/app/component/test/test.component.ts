import { Component, OnInit } from '@angular/core';
import { SkillsetService } from 'src/app/Services/skillset.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  popup: boolean = false;
  name: String;
  data: object;
  getQuestionURL = '';
  constructor(private SkillSet: SkillsetService, private router: Router) { }
  ngOnInit(): void {
    this.SkillSet.getSkillData().subscribe((data: any) => {
      this.data = data.data;
    });
  }

  showPopup(skillId) {
    this.getQuestionURL = '/quiz?skillId=' + skillId;
    this.popup = true;
  }

  startTest() {
    this.router.navigateByUrl(this.getQuestionURL);
  }

}
