import React, {FC} from 'react';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import {Link} from "react-router-dom";
import Slider from "react-slick";

import scss from './TabsComponent.module.scss';
import {settings} from "../../utils/SettingForSlider";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {PersonForSlider} from "../PersonForSlider/PersonForSlider";
import {ICast} from "../../types/ICreditsMovie";
import {ICastTv} from "../../types/ICreditsTv";

interface ITabsComponentProps {
    id: number;
    overview: string;
    cast: ICast[] | ICastTv[]
}

const TabsComponent: FC<ITabsComponentProps> = ({overview, id, cast}) => {

    const isEmptyArr = (arr: ICast[] | ICastTv[]) => {
        return arr?.length !== 0;
    }

    return (
        <Tabs>
            <TabList>
                <Tab style={{fontWeight: '300'}}>Опис</Tab>
                <Tab style={{fontWeight: '300'}}>У головних ролях</Tab>
            </TabList>

            <TabPanel>
                <p className={scss.overview}>
                    {overview === '' ? 'Опис відсутній' : overview}
                </p>
            </TabPanel>
            <TabPanel>
                {
                    isEmptyArr(cast) && (
                        <section className={scss.slider}>
                            <div className={scss.slider_title}>
                                <h2>У головних ролях</h2>
                                <Link to={'movie-now-playing'}>
                                    <button>Оглянути всі</button>
                                </Link>
                            </div>
                            <Slider {...settings}>
                                {
                                    cast?.map(item => <PersonForSlider key={item.id} {...item}/>)
                                }
                            </Slider>
                        </section>
                    )
                }
            </TabPanel>
        </Tabs>

    );
};


export {TabsComponent};