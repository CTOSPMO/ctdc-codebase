import React, { PureComponent } from 'react';
import { Sunburst, LabelSeries } from 'react-vis';
import { withStyles } from '@material-ui/core';

// const LABEL_STYLE = {
//   fontSize: '10px',
//   textAnchor: 'middle',
//   fill: 'white',
//   fontFamily: '"Open Sans", sans-serif',
// };

function getKeyPath(node) {
  if (!node.parent) {
    return ['root'];
  }

  return [(node.data && node.data.title) || node.title].concat(
    getKeyPath(node.parent),
  );
}


function updateData(d, keyPath) {
  const data = d;
  if (data.children) {
    data.children.map((child) => updateData(child, keyPath));
  }

  data.style = {
    ...data.style,
    fillOpacity: keyPath && !keyPath[data.title] ? 0.2 : 1,
  };

  return data;
}


const styles = (theme) => ({
  title: {
    color: 'rgb(52, 120, 165)',
    fontSize: '12px',
    maxWidth: '1440px',
    fontFamily: theme.custom.fontFamily,
    lineHeight: '20px',
    fontWeight: '600',
    paddingLeft: '28px',
    height: '20px',
  },
});


class ProgramSunburst extends PureComponent {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      widgetData: data,
      size: data.children[0].size,
      title: data.children[0].title,
      caseSize: data.children[0].caseSize,
    };
  }


  render() {
    const {
      caseSize, size, widgetData, title,
    } = this.state;
    const {
      width, height, data, textColor, classes,
    } = this.props;
    if (data.key !== widgetData.key) {
      this.setState({
        widgetData: data,
        size,
        title,
        caseSize,
      });
    }

    return (
      <>
        <div className={classes.title}>
          {title}
        </div>
        <Sunburst
          id={widgetData.key}
          hideRootNode
          animation
          colorType="literal"
          data={widgetData}
          height={height}
          width={width}
          style={{
            stroke: '#ddd',
            strokeOpacity: 0.3,
            strokeWidth: '0.5',
          }}
          onValueMouseOver={(node) => {
            const path = getKeyPath(node).reverse();
            const pathAsMap = path.reduce((res, row) => {
              res[row.toString()] = true;
              return res;
            }, {});
            const wdata = updateData(widgetData, pathAsMap);
            this.setState({
              size: node.size,
              widgetData: wdata,
              title: node.title,
              caseSize: node.size || node.caseSize,
            });
          }}
        >
          {caseSize && (
          <LabelSeries data={[{
            x: 0,
            y: 0,
            label: caseSize,
            style: {
              fontSize: '12px',
              textAnchor: 'middle',
              fill: textColor,
              fontFamily: '"Lato Regular","Open Sans", sans-serif',
            },
          }, {
            x: 0,
            y: 1,
            label: 'Cases',
            style: {
              fontSize: '12px',
              textAnchor: 'middle',
              fill: textColor,
              fontFamily: '"Lato Regular","Open Sans", sans-serif',
            },
          }]}
          />
          )}
        </Sunburst>
      </>
    );
  }
}


export default withStyles(styles)(ProgramSunburst);
