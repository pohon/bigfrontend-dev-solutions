import { render, screen, waitFor } from '@testing-library/react'
import PhoneNumberInput from '.';

test('should render correctly', async () => {
  render(<PhoneNumberInput/>)

  expect(screen.getByRole('textbox')).toBeInTheDocument();
});