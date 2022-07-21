import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
let loadedCallback = null;
let loaded = false;
const Odometer = dynamic(import('react-odometerjs'), {
    ssr: false,
    loading: () => 0
});
import VisibilitySensor from 'react-visibility-sensor';
import 'odometer/themes/odometer-theme-default.css';

function Odometers({ value }) {
    const [odometerValue, setOdometerValue] = useState(0);
    const [view, setView] = useState(false);
    const onVisibilityChange = (isVisible) => {
        if (isVisible) {
            setView(true);
        } else {
            setView(false);
        }
    };
    useEffect(() => {
        setTimeout(() => {
            setOdometerValue(value);
        }, 10);
    }, []);
    return (
        <VisibilitySensor onChange={onVisibilityChange} offset={{ top: -70, bottom: -70 }} delayedCall>
            <div>
                <Odometer
                    value={view ? odometerValue : 0}
                    format="(,ddd)"
                    theme="default"
                />
            </div>
        </VisibilitySensor>
    )
}
export default Odometers;