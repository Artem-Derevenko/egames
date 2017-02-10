import React from 'react';
import BlockAdvantagesItem from './BlockAdvantagesItem';

class BlockAdvantages extends React.Component {
	render() {
		const AdvantagesList = [
            {
                title: "CLEAN THEME",
                text: "Ut nec lorem id orci convallis porta. Donec pharetra neque eu velit dictum molestie. Duis porta gravida augue sed viverra. Quisque at nulla leo, non aliquet mi."
            },
            {
                title: "RESPONSIVE DESIGN",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod placerat dui et tincidunt. Sed sollicitudin posuere auctor. Phasellus at ultricies nisl. Integer at leo eros."
            },
            {
                title: "FULLY LAYERD PSD",
                text: "Phasellus lobortis metus non augue sodales volutpat. Vestibulum sit amet nibh eros, hendrerit venenatis est. In vitae nulla nec purus cursus pretium sed id magna."
            },
            {
                title: "READY FOR CODING",
                text: "Vivamus convallis feugiat mauris sed posuere. Nam rutrum, quam quis euismod commodo, elit est porta quam, non placerat eros neque porta ante. Fusce quis odio urna."
            }
        ];
		return (
		    <div className="Bwrappers next">
                {
                    AdvantagesList.map((item, i) => 
                        <BlockAdvantagesItem key={i} title={item.title} text={item.text} />)
                }
            </div>
		)
	}
}

export default BlockAdvantages;