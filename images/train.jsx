import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
      <path d="M73 1.1c-3.5 1.4-6.6 4.6-8 8-1.1 2.5-1.8 2.9-4.9 2.9-9.9 0-20.7 6.6-25.4 15.4l-2.2 4.1v129l2.2 4.1c1.2 2.3 4.3 6 6.8 8.2C44 175 46 177 46 177.3c0 .2-4.3 4-9.5 8.2-5.2 4.3-9.7 8.5-10 9.2-.8 2.1 1.3 5.3 3.4 5.3 1.1 0 7.3-4.5 13.9-10l12-10h88.4l12 10c6.6 5.5 12.8 10 13.9 10 2.1 0 4.2-3.2 3.4-5.3-.3-.7-4.8-4.9-10-9.2-5.2-4.2-9.5-8-9.5-8.2 0-.3 2-2.3 4.5-4.5s5.6-5.9 6.8-8.2l2.2-4.1v-129l-2.2-4.1c-4.7-8.8-15.5-15.4-25.2-15.4-3.1 0-3.9-.5-5.6-3.7-3-5.4-6.8-7.8-12.5-7.8s-9.5 2.4-12.5 7.8l-2 3.7h-15l-2-3.7c-1.1-2-3.2-4.5-4.6-5.5C82.8.5 76.4-.4 73 1.1zm9 8.9c1.1 1.1 2 2.9 2 4s-.9 2.9-2 4-2.9 2-4 2-2.9-.9-4-2-2-2.9-2-4 .9-2.9 2-4 2.9-2 4-2 2.9.9 4 2zm44 0c1.1 1.1 2 2.9 2 4 0 2.5-3.4 6-5.8 6-2.9 0-6.2-2.9-6.2-5.6 0-2.9 3.2-6.4 6-6.4 1.1 0 2.9.9 4 2zM67.2 22.5c1.1 1.4 3.3 3.2 4.8 4 5.7 2.9 12.7 1.2 16.8-4 1.9-2.3 2.5-2.5 11.2-2.5s9.3.2 11.2 2.5c5.6 7.2 16 7.2 21.6 0 1.6-2.1 2.8-2.5 6.8-2.5 8.7.1 15.7 4.6 18.9 12.2 2.3 5.6 2.3 122 0 127.6-2.1 4.9-5.2 8.1-10 10.3-3.7 1.7-7.4 1.9-48.3 1.9-37.7 0-44.8-.2-48-1.5-4.9-2.1-8.1-5.2-10.3-10-1.7-3.7-1.9-7.8-1.9-64.3 0-65-.1-64.2 5.3-70.1 3.2-3.5 9.5-6.1 15.1-6.1 4 0 5.2.4 6.8 2.5z" />
      <path d="M70.5 38.5c-2.1 2-2.5 3.4-2.5 8V52h-5.1c-6.3 0-10.9 2.1-13.2 5.9-2.5 4.3-2.5 39.9 0 44.2 3.5 5.8 4 5.9 50.3 5.9s46.8-.1 50.3-5.9c2.5-4.3 2.5-39.9 0-44.2-2.3-3.8-6.9-5.9-13.2-5.9H132v-5.5c0-4.6-.4-6-2.5-8l-2.4-2.5H72.9l-2.4 2.5zM124 48v4H76v-8h48v4zm18.8 13.2c.8.8 1.2 6.4 1.2 18.8s-.4 18-1.2 18.8c-1.7 1.7-83.9 1.7-85.6 0-1.7-1.7-1.7-35.9 0-37.6 1.7-1.7 83.9-1.7 85.6 0zM57.2 129.6c-1.8 1-4.5 3.3-6 5.2-2.2 2.9-2.7 4.6-2.7 9.2 0 4.7.5 6.3 2.9 9.4 8.7 11.5 26.7 6.7 28.3-7.6.7-5.7-1.5-10.8-6.1-14.3s-11.6-4.3-16.4-1.9zm12.3 8.9c5 4.9 1.5 13.5-5.5 13.5-1.9 0-4-.9-5.5-2.5-1.6-1.5-2.5-3.6-2.5-5.5s.9-4 2.5-5.5c1.5-1.6 3.6-2.5 5.5-2.5s4 .9 5.5 2.5zM129.2 129.6c-1.8 1-4.5 3.3-6 5.2-2.2 2.9-2.7 4.6-2.7 9.2 0 4.7.5 6.3 2.9 9.4 8.7 11.5 26.7 6.7 28.3-7.6.7-5.7-1.5-10.8-6.1-14.3s-11.6-4.3-16.4-1.9zm12.3 8.9c5 4.9 1.5 13.5-5.5 13.5-4.1 0-8-3.9-8-8s3.9-8 8-8c1.9 0 4 .9 5.5 2.5z" />
    </svg>
  );
}

export default SvgComponent;
