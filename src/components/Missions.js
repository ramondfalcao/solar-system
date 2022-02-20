import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div className="missions" data-testid="missions">
        {missions.map((mission, index) => (
          <MissionCard
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
            key={ index }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
