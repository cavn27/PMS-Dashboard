import React, { useState } from 'react';

import RadarGraphBest from '../Charts/RadarGraphBest';
import RadarGraph2 from '../Charts/RadarGraph2';
import RadarGraph3 from '../Charts/RadarGraph3';
import RadarGraph4 from '../Charts/RadarGraph4';
import RadarGraph5 from '../Charts/RadarGraph5';

const Tabs = () => {

    const [currentTab, setCurrentTab] = useState('5');
    const tabs = [
        {
            id: 1,
            tabTitle: '⭐ Ximena F.',
            title: 'Ximena Fowks',
            content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.'
        },
        {
            id: 2,
            tabTitle: '👤 Carlos V.',
            title: 'Carlos Villanueva',
            content: 'Contenido de tab 2.'
        },
        {
            id: 3,
            tabTitle: '👤 Alexander Q.',
            title: 'Alexander Quiroz',
            content: 'Contenido de tab 3.'
        },
        {
            id: 4,
            tabTitle: '👤 Juan P.',
            title: 'Juan Pérez',
            content: 'Contenido de tab 4.'
        },
        {
            id: 5,
            tabTitle: '👤 Mark A.',
            title: 'Mark Aguirre',
            content: 'Contenido de tab 4.'
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <React.Fragment>

            <div className="employees-container">    
                
                <div className="col-sm-6">

                    <div className='tabs'>
                        {tabs.map((tab, i) =>
                            <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>
                            {tab.tabTitle}
                            </button>
                        )}
                    </div>


                {
                    currentTab==='1' && (
                        <div className="col-md-10 form-group">
                            <RadarGraphBest/>
                        </div>
                )}           

                {
                    currentTab==='2' && (
                        <div className="col-md-10 form-group">
                            <RadarGraph2/>
                        </div>
                ) }           

                {
                    currentTab==='3' && (
                        <div className="col-md-10 form-group">
                            <RadarGraph3/>
                        </div>
                ) }           

                {
                    currentTab==='4' && (
                        <div className="col-md-10 form-group">
                            <RadarGraph4/>
                        </div>
                ) }{
                    currentTab==='5' && (
                        <div className="col-md-10 form-group">
                            <RadarGraph5/>
                        </div>
                ) }
            
                </div>  
                
            </div>
        </React.Fragment>
    );
}

export default Tabs;