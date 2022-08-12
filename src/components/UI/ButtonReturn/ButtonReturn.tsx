import React, {FC} from 'react';

import scss from './ButtonReturn.module.scss';

const ButtonReturn: FC = () => {
    return (
        <button className={scss.btn}>Повернутись на головну</button>
    );
};

export {ButtonReturn};
