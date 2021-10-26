import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { GrLinkedinOption } from 'react-icons/gr';
import { FaFacebookF } from 'react-icons/fa';
import './styles.sass';

const SocialToolbar = () => {
    return (
        <div className="social-toolbar-container">
            <div className="social">
                <a
                    href="https://github.com/tsahiBarshevsky"
                    target="_blank"
                    rel="noreferrer"
                    title="TsahiB on GitHub"
                    className="link hover-social"
                >
                    <FiGithub style={{ fontSize: 20 }} />
                </a>
                <a
                    href="https://www.linkedin.com/in/tsahi-barshavsky-frontend-developer/"
                    target="_blank"
                    rel="noreferrer"
                    title="TsahiB on Linkedin"
                    className="link hover-social"
                >
                    <GrLinkedinOption style={{ fontSize: 20 }} />
                </a>
                <a
                    href="https://www.facebook.com/tsahi.barshavsky/"
                    target="_blank"
                    rel="noreferrer"
                    title="TsahiB on Facebook"
                    className="link hover-social"
                >
                    <FaFacebookF style={{ fontSize: 20 }} />
                </a>
                <div className="vertical-line" />
            </div>
            <div className="social">
                <a
                    href="mailto:tsahi.13@gmail.com"
                    className="link hover-mail vertical-align"
                >
                    tsahi.13@gmail.com
                </a>
                <div className="vertical-line" />
            </div>
        </div>
    )
}

export default SocialToolbar;
