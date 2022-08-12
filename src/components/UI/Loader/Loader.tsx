import React, {FC} from 'react';

import scss from './Loader.module.scss';

const Loader: FC = () => {
    return (
        <div className={scss.holder}>
            <div className={scss.preloader}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export {Loader};
