import Restaurant from "@/models/restaurant";
import bdd from '../models/bdd.json';

class DataService {

    private data$: Restaurant[];

    public get data(): Restaurant[] {
        return this.data$;
    }

    createNewRestaurant = (name: string, note: number, image: string, driveTime: string) => {
        return new Restaurant(name, note, image, driveTime);
    }
    
    public getRestaurants() {
        this.data$ = [];
        bdd.forEach((r: Restaurant) => {
            const newRestaurant = this.createNewRestaurant(r.name, r.note, r.image, r.driveTime);
            this.data$.push(newRestaurant);
        });
        return this.data$;
    }

    public filteringRestaurantByName(name): Restaurant[] {
        if (name === '') {
            return this.data$;
        } else {
            const items = this.data$.filter(r => r.name.toLowerCase().indexOf(name.toLowerCase()) >= 0);
            return items;
        }  
    }

    public getRestaurantByName(name): Restaurant | undefined {
        const foundItem = this.data$.find(r => r.name.toLocaleLowerCase() === name.toLowerCase());
        return foundItem;
    }
}

export default new DataService();