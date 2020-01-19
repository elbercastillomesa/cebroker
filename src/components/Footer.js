import React from 'react';
import { ReactComponent as IconRE } from '../images/icon-renewable-energy.svg';
import { ReactComponent as IconCL } from '../images/icon-ceb-lg.svg';
import { ReactComponent as Ig } from '../images/icon-instagram.svg';
import { ReactComponent as Fb } from '../images/icon-facebook.svg';
import { ReactComponent as Tw } from '../images/icon-twitter.svg';
import { ReactComponent as Li } from '../images/icon-linkedin.svg';

export default (  ) => {

    return(

        <section className="footer">
            <div className="formSection">
                <div>
                    <div className="section-sustainability">
                        <p>
                            <IconRE />
                            CE Broker now offsets 100% of our energy consumption with renewable energy certificates.
                            <a href="https://www.cebroker.com/sustainability">Learn more</a>
                        </p>
                    </div>
                    <div className="section-links">
                        <ul className="sections-list">
                            <li className="hidden-xs">
                                <IconCL />
                            </li>
                        </ul>
                    </div>
                </div>                
            </div>
        </section>
    );
}