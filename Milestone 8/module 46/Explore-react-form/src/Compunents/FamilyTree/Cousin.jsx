import React, { use } from 'react';
import { AssetsContext } from './Grandpa';

const Cousin = ({name}) => {
    const giveTaka=use(AssetsContext)
    return (
        <div>
            <p>{name}</p>
            {
                name==='lom lom'&& <p>{giveTaka.taka}</p>
            }
        </div>
    );
};

export default Cousin;