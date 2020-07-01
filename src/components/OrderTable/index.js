import React from 'react';

import * as S from './styles'


function renderNutritionFacts(nutrients) {
	return Object.keys(nutrients).map((nutrient, index) => {
		return (
			<tr key={index}>
				<th>{nutrient[0].toUpperCase() + nutrient.slice(1)}</th>
				<td>{nutrients[nutrient]}</td>
			</tr>
		)
	})
}

export default function OrderTable(props) {
	return (
			<div>
			<S.OrderFacts>
				<S.OrderTable className="table">
					<thead>
      <tr>
        <th colSpan="3" className="small-info">
          Amount Per Serving
        </th>
      </tr>
    </thead>
    <tbody>
    {renderNutritionFacts(props.data)}
    </tbody>
		</S.OrderTable>
	</S.OrderFacts>
	</div>

)

}
