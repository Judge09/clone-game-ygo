import React from 'react';
import { is_monster, is_spell, is_trap } from '../../Card/utils/utils'
import './LeftPanel.css';

class Detail extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {cardEnv} = this.props
        if (cardEnv) {
            const card = cardEnv.card
            const card_specific = () => {
                if (is_monster(card.card_type)) {
                    return (
                        <div>
                            <div className="specific">
                                <p className="specific_type">{card.card_type}</p>
                                <div className="specific_others">
                                    <img className="specific_others_icon" src={"https://ygoprodeck.com/wp-content/uploads/2017/01/level.png"}></img>
                                    <p>{card.level}</p>
                                    <img className="specific_others_icon" src={"https://ygoprodeck.com/pics/"+ card.attribute +".jpg"} />
                                    <img className="specific_others_icon" src={"https://ygoprodeck.com/pics/icons/race/" + card.race + ".png"} />
                                </div>
                                
                            </div>
                            <div className="specific">
                                <p>{cardEnv.current_atk}</p>
                                <p>{cardEnv.current_def}</p>
                            </div>
                        </div>
                        
                    )
                }
            }
            return (
                <div className="card_pic_container">
                    <h1 className="heading-name">{card.name}</h1>
                    {card_specific()}
                    <p>
                        {card.description}
                    </p>
                </div>
            )
        } else {
            return (
                <p>Loading</p>
            )
        }
    }
}

export default Detail;