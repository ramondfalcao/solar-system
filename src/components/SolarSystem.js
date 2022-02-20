import React from 'react';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="planets" data-testid="solar-system">
        {Planets.map((planet, index) => (
          <PlanetCard
            planetName={ planet.name }
            planetImage={ planet.image }
            key={ index }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
