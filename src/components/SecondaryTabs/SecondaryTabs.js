import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Wrapper from '../Wrapper';

const SecondaryTabsItem = ({className, children}) => {

  const wrapperClasses = classNames(
    'wfp--secondary-tabs__item',
    className
  );
	return (
		<li className={wrapperClasses}>
			{children}
		</li>
	)
};

SecondaryTabsItem.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const SecondaryTabs = ({children, className, id, pageWidth}) => {

  const wrapperClasses = classNames(
    'wfp--secondary-tabs',
    className
  );

  return (
    <div id={id} className={wrapperClasses}>
			<Wrapper pageWidth={pageWidth}>
				<ul className="wfp--secondary-tabs__list">
					{children}
				</ul>
			</Wrapper>
    </div>
  );
};

SecondaryTabs.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,
  id: PropTypes.string,
  wrapperClassName: PropTypes.string,
};

SecondaryTabs.defaultProps = {
	pageWidth: 'narrower'
};

export { SecondaryTabsItem, SecondaryTabs };
