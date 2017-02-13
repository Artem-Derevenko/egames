import React from 'react';

class BlockSearch extends React.Component {
	render() {
		return (
            <div className="block-search-conteniar">
                <div className="block-search">
                    <form method="GET" action="search.php?q=">
                        <div className="input-search-border">
                            <span></span> 
                            <input type="text" className="input-search" name="q" placeholder="Введите запрос" value="" autocomplete="off" />
                        </div>
                        <div className="button-search-border">
                            <input type="submit" className="button-search" value="Поиск по сайту" />
                        </div>
                    </form>
                    <div className="result-search"></div>
                </div>
            </div>
		)
	}
}

export default BlockSearch;