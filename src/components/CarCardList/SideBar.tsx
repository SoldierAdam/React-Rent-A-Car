import { Formik, Field, Form } from 'formik';

const SideBar = () => (
	<div>
		<h1>Filter Panel</h1>
		<Formik
			initialValues={{ status: '', format: '' }}
			onSubmit={async (values) => {
				await new Promise((r) => setTimeout(r, 500));
				alert(JSON.stringify(values, null, 2));
			}}
		>
			<Form>
				<div>
					<label htmlFor="status">Status</label>
					<Field as="select" name="status">
						<option value="single">Single</option>
						<option value="married">Married</option>
						<option value="its_complicated">It's complicated</option>
					</Field>
				</div>

				<div>
					<label htmlFor="format">Format</label>
					<Field as="select" name="format">
						<option value="magazine">Magazine</option>
						<option value="website">Website</option>
						<option value="vine">Vine</option>
						<option value="tweet">Tweet</option>
					</Field>
				</div>

				<button type="submit">Submit</button>
			</Form>
		</Formik>
	</div>
);

export default SideBar;