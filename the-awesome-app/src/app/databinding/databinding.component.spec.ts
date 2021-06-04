import { TestBed } from '@angular/core/testing';
import {DataBindingComponent} from './databinding.component';

fdescribe("DataBinding Component", () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DataBindingComponent]

        }).compileComponents();
    })

    it("creates an instance", () => {
        

        const fixture = TestBed.createComponent(DataBindingComponent);
        expect(fixture).toBeTruthy();
    });

    it("increment count", () => {

        const fixture = TestBed.createComponent(DataBindingComponent);
        const instance = fixture.componentInstance;
        expect(instance.count).toBe(18);
        instance.increment({});
        expect(instance.count).toBe(19);
    });

    it("increment count in view", () => {

        const fixture = TestBed.createComponent(DataBindingComponent);
        fixture.detectChanges();
        const nativeElement = fixture.nativeElement;
        let content = nativeElement.querySelector("#ctr").textContent;
        expect(content).toContain("18");

        const instance = fixture.componentInstance;
        instance.increment({});
        fixture.detectChanges();
        content = nativeElement.querySelector("#ctr").textContent;
        expect(content).toContain("19");
        
    });




})