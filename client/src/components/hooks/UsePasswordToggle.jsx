import React, {useState} from 'react';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UsePasswordToggle() {
    const [visible, setVisibility] = useState(false);

    const Icon = (
        <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} onClick={() => setVisibility(visibility => !visibility)}>

        </FontAwesomeIcon>
    )

    const inputType = visible ? 'text' : 'password'
  return [inputType, Icon]
}
