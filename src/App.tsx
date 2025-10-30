import { Button } from './components/Button';
import { Table } from './components/Table';
import './App.css';

export const App = () => {
  return (
    <div className="app">
      <div className="container">
        <h1>Apple Liquid Glass Buttons</h1>

        <section className="demo-section">
          <h2>Variants</h2>
          <div className="button-row">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </section>

        <section className="demo-section">
          <h2>Sizes</h2>
          <div className="button-row">
            <Button variant="primary" size="sm">
              Small
            </Button>
            <Button variant="primary" size="md">
              Medium
            </Button>
            <Button variant="primary" size="lg">
              Large
            </Button>
          </div>
        </section>

        <section className="demo-section">
          <h2>States</h2>
          <div className="button-row">
            <Button variant="primary">Enabled</Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
          </div>
        </section>

        <section className="demo-section">
          <h2>All Variants with Different Sizes</h2>
          <div className="button-grid">
            <Button variant="primary" size="sm">
              Primary Small
            </Button>
            <Button variant="secondary" size="sm">
              Secondary Small
            </Button>
            <Button variant="outlined" size="sm">
              Outlined Small
            </Button>

            <Button variant="primary" size="md">
              Primary Medium
            </Button>
            <Button variant="secondary" size="md">
              Secondary Medium
            </Button>
            <Button variant="outlined" size="md">
              Outlined Medium
            </Button>

            <Button variant="primary" size="lg">
              Primary Large
            </Button>
            <Button variant="secondary" size="lg">
              Secondary Large
            </Button>
            <Button variant="outlined" size="lg">
              Outlined Large
            </Button>
          </div>
        </section>

        <section className="demo-section">
          <h2>Liquid Glass Table</h2>
          <Table
            columns={[
              { key: 'name', header: 'Name' },
              { key: 'role', header: 'Role' },
              { key: 'department', header: 'Department' },
              {
                key: 'status',
                header: 'Status',
                render: (value) => (
                  <span className={`status-badge status-${value}`}>
                    {String(value)}
                  </span>
                ),
              },
              { key: 'email', header: 'Email' },
            ]}
            data={[
              {
                name: 'Tim Cook',
                role: 'CEO',
                department: 'Executive',
                status: 'active',
                email: 'tim@apple.com',
              },
              {
                name: 'Craig Federighi',
                role: 'SVP Software Engineering',
                department: 'Engineering',
                status: 'active',
                email: 'craig@apple.com',
              },
              {
                name: 'Jony Ive',
                role: 'Chief Design Officer',
                department: 'Design',
                status: 'inactive',
                email: 'jony@apple.com',
              },
              {
                name: 'Phil Schiller',
                role: 'Apple Fellow',
                department: 'Marketing',
                status: 'active',
                email: 'phil@apple.com',
              },
              {
                name: 'Eddy Cue',
                role: 'SVP Services',
                department: 'Services',
                status: 'active',
                email: 'eddy@apple.com',
              },
            ]}
          />
        </section>
      </div>
    </div>
  );
};
