import React, {	Component } from 'react';
import ReactHighcharts, {Highcharts} from 'react-highcharts';

export default class AssetChart extends Component {
	constructor(props) {
		super(props);
		this.givePortions = this.givePortions.bind(this);
	}

	givePortions() {
		const totalCash = this.props.cash;
		const stocks = this.props.stocks;
		const dataContainer = [];

		if (stocks.length > 0) {
			stocks.map(function(quantityStock) {
				dataContainer.push([quantityStock.stock.symbol, (parseFloat(quantityStock.quantity) * parseFloat(quantityStock.stock.askPrice))])
			})
		}
		dataContainer.push(['Cash', totalCash])
		return dataContainer
	}


	render() {
		const data = this.givePortions();
		const config = {
        chart: {
        	height: 200,
        	width: 250,
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            margin: [30, 0, 0, 0],
            spacingTop: 0,
            spacingBottom: 0,
            spacingLeft: 0,
            spacingRight: 0,
            backgroundColor:'transparent'
        },
        title: {
        	text: '',
            align: 'center',
            verticalAlign: 'middle',
            y: 40,
            style: {
                color: 'white',
            }
        },
        tooltip: {
        	enabled: false,
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    style: {
                        color: 'white'
                    },
                    connectorColor: 'silver'
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: data
            //[
            //     ['Firefox',   0],
            //     ['IE',       56.33],
            //     ['Chrome', 24.03],
            //     ['Safari',    4.77],
            //     ['Opera',     0.91],
            //     {
            //         name: 'Proprietary or Undetectable',
            //         y: 0.2,
            //         dataLabels: {
            //             enabled: false
            //         }
            //     }
            // ]
        }]
    }

		return(
			<div>
				<ReactHighcharts config={config} />
			</div>
		);
	}
}