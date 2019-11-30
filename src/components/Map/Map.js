import React from "react";
import styled from "styled-components";

import Pmap from "pigeon-maps";
import Marker from "pigeon-marker";
import Overlay from "pigeon-overlay";
import useWindowSize from "../../utils/useWindowSize";

const MapContainer = styled.div`
    height: 420px;
${props => props.size < 900 ? 'height: 220px;' : null}

    width: 100%;
`;

const Map = () => {
  const size = useWindowSize()
  return (
    <MapContainer size={size}>
      <Pmap center={[42.0050,21.4408]} zoom={12}>
        <Marker
          anchor={[42.0050,21.4408]}
          payload={1}
          onClick={({ event, anchor, payload }) => {}}
        />

        <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
          <img src="pigeon.jpg" width={'240'} height={158} alt="Tuka text" />
        </Overlay>
      </Pmap>
    </MapContainer>
  );
};

export default Map;
