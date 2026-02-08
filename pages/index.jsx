import React, { useState } from 'react';

const EquipmentSpecs = () => {
    const [activeTab, setActiveTab] = useState('specs');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <h1>Equipment Specifications & Troubleshooting Guide</h1>
            <div>
                <button onClick={() => handleTabClick('specs')}>Specifications</button>
                <button onClick={() => handleTabClick('troubleshooting')}>Troubleshooting</button>
            </div>
            <div>
                {activeTab === 'specs' ? (
                    <div>
                        <h2>Specifications</h2>
                        <ul>
                            <li>Weight: 20 kg</li>
                            <li>Dimensions: 50 x 30 x 100 cm</li>
                            <li>Power: 220V</li>
                            <li>Capacity: 100 liters</li>
                        </ul>
                    </div>
                ) : (
                    <div>
                        <h2>Troubleshooting</h2>
                        <ul>
                            <li>Issue 1: Check power supply.</li>
                            <li>Issue 2: Ensure water reservoir is filled.</li>
                            <li>Issue 3: Check for clogging in the dispensing mechanism.</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EquipmentSpecs;