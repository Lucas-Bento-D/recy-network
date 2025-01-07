import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

type cssmapType = {
  [id: string]: string;
};
const cssmap: cssmapType = {
  'option-hodler': 'option-hodler',
  'option-recycler': 'option-recycler',
  'option-waste': 'option-waste',
};
interface Props {
  beforeText?: string;
  id: string;
  name: string;
}
export const RadioBox = ({ beforeText, id, name }: Props) => {
  return (
    <>
      <FormItem key={`${id}-box`}>
        <FormLabel className="[&:has([data-state=checked])>div]:border-primary [&:has([data-state=checked])>div>.checked-box-symbol]:block">
          <FormControl>
            <RadioGroupItem value={id} className="sr-only" />
          </FormControl>
          <Card className="hover:border-primary [&:has([data-state=checked])]:border-primary relative flex h-28 cursor-pointer flex-col justify-center border-2 p-4 transition-colors duration-200 ease-in-out">
            <div className="p0">
              {/* <Icon icon={role.icon} className="text-primary mx-auto h-12 w-12" /> */}
              {beforeText && <span className="">{beforeText}</span>}
              <CardTitle className="mt-px pr-6 text-left text-base font-bold">{name}</CardTitle>
            </div>
            <span className="checked-box-symbol absolute right-6 top-6 hidden h-5 w-5 rounded-full bg-blue-500 text-center text-sm text-white [&:has([data-state=checked])]:block">
              &#x2713;
            </span>
          </Card>
        </FormLabel>
      </FormItem>
    </>
  );
};
