import SanityImage from '@components/SanityImage';
import { PortableText } from '@portabletext/react';
import classNames from 'classnames';

export const portableTextComponents = {
    types: {
        image: ({ value }: any) => {
            return <SanityImage {...value} />;
        },
    },
};

export const renderTextBlock = (content, className = ''): React.ReactElement => (
    <div className={classNames('text-block-component', className)}>
        <PortableText value={content} components={portableTextComponents} />
    </div>
);