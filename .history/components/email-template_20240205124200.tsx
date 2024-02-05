import Link from 'next/link';
import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Please click this <Link href={"/auth/verify-email"}>link</Link> to verify your email</h1>
  </div>
);
