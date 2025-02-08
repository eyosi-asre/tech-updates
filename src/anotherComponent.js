import Input from './input';
import Button from './button';
import { Card, CardContent } from './card';

const AnotherComponent = () => (
  <div>
    <Input placeholder="Enter text" />
    <Button>Click Me</Button>
    <Card>
      <CardContent>
        This is some content inside the card.
      </CardContent>
    </Card>
  </div>
);

export default AnotherComponent;