import { CABINETS, type Cabinet } from './data/fleet';
import { HudHeader } from './components/HudHeader';
import { Readouts } from './components/Readouts';
import { CrewRoster } from './components/CrewRoster';
import { CommandPanel } from './components/CommandPanel';
import { QuestLog } from './components/QuestLog';

/** Cabinet theme from `?cabinet=`, defaulting to sudo-hero as in the design. */
function cabinetFromUrl(): Cabinet {
  const param = new URLSearchParams(window.location.search).get('cabinet');
  return CABINETS.includes(param as Cabinet) ? (param as Cabinet) : 'sudo-hero';
}

export function App({ cabinet = cabinetFromUrl() }: { cabinet?: Cabinet }) {
  return (
    <div className="dashboard" data-cabinet={cabinet}>
      <div className="dashboard__inner">
        <HudHeader />
        <Readouts />
        <div className="dashboard__main">
          <CrewRoster />
          <CommandPanel />
        </div>
        <QuestLog />
      </div>
    </div>
  );
}
