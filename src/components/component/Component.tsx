import React from 'react';

export interface Props extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref' | 'children'> {
  bbb_opt?: number;
  aaa_req: string;
  aaa_opt?: number;
  ccc_req: string;
}

const Component = ({
  bbb_opt,
  aaa_req,
  aaa_opt,
  ccc_req,
  ...props
}: Props) => {
  console.log(bbb_opt, aaa_req, aaa_opt, ccc_req);
  return (
    <div {...props}>
      Component body
    </div>
  );
};

export default Component;
