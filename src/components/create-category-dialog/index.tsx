import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { theme } from '../../styles/theme';
import { Button } from '../button';
import { Dialog } from '../dialog';
import { Input } from '../input';
import { Title } from '../title';
import { Container } from './styles';

type CreateCategoryData = {
  title: string;
  color: string;
};

export function CreateCategoryDialog() {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm<CreateCategoryData>({
    defaultValues: {
      title: '',
      color: theme.colors.primary,
    },
  });

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onSubmit = useCallback(
    (data: CreateCategoryData) => {
      console.log(data);
      handleClose();
    },
    [handleClose],
  );

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>Nova categoria</Button>}
    >
      <Container>
        <Title
          title="Nova Categoria"
          subtitle="Crie uma nova categoria para suas transações"
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              label="Nome"
              placeholder="Nome da categoria..."
              {...register('title')}
            />
            <Input label="Cor" type="color" {...register('color')} />
          </div>
          <footer>
            <Button onClick={handleClose} variant="outline" type="button">
              Calcelar
            </Button>
            <Button type="submit">Cadastrar</Button>
          </footer>
        </form>
      </Container>
    </Dialog>
  );
}
