import { PlanetInfo } from './planet-info';
export class PlanetImg {
    public title: string;
    public url: string;
}

export function createFromPlanetInfo( info: PlanetInfo ):PlanetImg{
    const correspondances: PlanetImg[] = [
        { title: 'INFERNO', url: 'assets/images/hotRockyPlanet.png' },
        { title: 'HELIOS', url: 'assets/images/hotGazyPlanet.png' },
        { title: 'VALKYRIE', url: 'assets/images/temperedRockyPlanet.png' },
        { title: 'CREPITUS', url: 'assets/images/temperedGazyPlanet.png' },
        { title: 'BOREAS', url: 'assets/images/coldRockyPlanet.png' },
        { title: 'JÖTUNN', url: 'assets/images/coldGazyPlanet.png' }
    ];

    let id:number = 0;

    if (info.pl_masse > 10) {
        if (info.pl_eqt > 50) {
            id = 1;
        } else if (info.pl_eqt < -10) {
            id = 5;
        } else {
            id = 3;
        }
    } else {
        if (info.pl_eqt > 50) {
            id = 0;
        } else if (info.pl_eqt < -10) {
            id = 4;
        } else {
            id = 2;
        }
    }

    console.log(info);

    return correspondances[id];
}
