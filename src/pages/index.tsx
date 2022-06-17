import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    type: 'Landing',
  },
  revalidate: 60 * 60 * 2,
});

export { default } from 'containers/Landing';
