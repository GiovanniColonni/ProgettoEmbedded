import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';

function VideoCallRedirect() {

  const history = useHistory()

  useEffect(() => {
    console.log(history.state)
    window.location.href = history.state.URL;
  }, []);

  return (
    <div>
      <h2>TEST</h2>
    </div>
  );
}

export default VideoCallRedirect;