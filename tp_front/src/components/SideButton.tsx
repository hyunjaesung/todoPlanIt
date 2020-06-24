import * as React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSatellite } from '@fortawesome/free-solid-svg-icons';
import './SideButton.scss';

const SideButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className={`top-right ${isOpen ? 'open' : ''}`}>
        {/* <a className="disc l1">
        <div>Group</div>
      </a> */}
        <a className="disc l1">
          <div>Journey</div>
        </a>
        <a className="disc l2">
          <div>MyPage</div>
        </a>
        <a className="disc l3">
          <div>Home</div>
        </a>
        <a
          className="disc l4 toggle"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <span>
            <FontAwesomeIcon icon={faSatellite} size="3x" />
          </span>
        </a>
      </nav>
    </>
  );
};

export default SideButton;
