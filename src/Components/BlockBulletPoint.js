import React from 'react';

export const BlockBulletPoint = ({bulletPoint}) => {
    return (
        <div id="f-BlockBulletPoint">
            <i class="fas fa-check-square f-CheckListIcon"></i>
            <h4 className="f-h4">{bulletPoint}</h4>
        </div> 
    )
}