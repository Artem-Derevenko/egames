import React from 'react';
import { Link } from 'react-router';

class BlockParameter extends React.Component {
	render() {
		return (
            <div className="block-wrapper">
				<div className="block-title">
					<p>Поиск по параметрам</p>
				</div>
				<div className="conteniar-wrapper">
					<p className="filter-title">Стоимость:</p>
					<form method="GET" action="search_filter.php">
						<div className="block-input-price">
							<div>
								<p>От</p>
							</div>
							<div className="border-input-price">
								<input type="text" id="start-price" name="start_price" value="50" />
							</div>
							<div>
								<p>До</p>
							</div>
							<div className="border-input-price">
								<input type="text" id="end-price" name="end_price" value="5000" />
							</div>
							<div>
								<p>грн.</p>
							</div>
						</div>
						<p className="filter-title">Разработчики:</p>
						<ul className="checkbox-parameter">
                    		<li>
	                    		<input type="checkbox" name="" value="" id="checkdevelopers1" />
	                    		<label for="checkdevelopers1">ffff</label>
                    		</li>
                    		<li>
	                    		<input type="checkbox" name="" value="" id="checkdevelopers2" />
	                    		<label for="checkdevelopers2">ffff</label>
                    		</li>
                    		<li>
	                    		<input type="checkbox" name="" value="" id="checkdevelopers3" />
	                    		<label for="checkdevelopers3">ffff</label>
                    		</li>
						</ul> 
						<p className="filter-title">Платформа:</p>						
						<ul className="checkbox-parameter">
							<li>
	                    		<input type="checkbox" name="" value="" id="checkplatform1" />
	                    		<label for="checkplatform1">ffff</label>
                    		</li>
                    		<li>
	                    		<input type="checkbox" name="" value="" id="checkplatform2" />
	                    		<label for="checkplatform2">ffff</label>
                    		</li>
						</ul> 
						<div className="button-param-search-border">
							<input type="submit" name="submit" id="button-param-search" value="Найти" />
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default BlockParameter;