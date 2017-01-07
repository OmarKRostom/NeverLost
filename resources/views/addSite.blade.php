@extends('layout')

@section('content')
	<h2>
		Add a site
		<br>
		<small style="font-size: 12px;">Enter username and password for your favourite provider.</small>
	</h2>
	<form class="col-xs-8 col-xs-offset-2" id="addsite">
		<div class="form-group">
			<div class="input-group marginer">
				<div class="input-group-addon">Username</div>
      			<input v-model="site_username" type="text" class="form-control" placeholder="Enter provider's username">
			</div>
			<div class="input-group marginer">
				<div class="input-group-addon">Password</div>
      			<input v-model="site_password" v-if="isPassShown" type="password" class="form-control" placeholder="Enter provider's password">
      			<input v-model="site_password" v-else type="text" class="form-control" placeholder="Enter provider's password">
      			<span class="input-group-btn">
			        <button @click="togglePassword" class="btn btn-secondary" type="button"><i class="fa fa-eye"></i></button>
			      </span>
			</div>
			<div class="input-group marginer">
				<div class="input-group-addon">Choose Provider</div>
      			<select v-model="site_provider" class="form-control">
  					<option value="" selected data-default>Select your provider</option>
      				@foreach($providers as $p)
      					<option>{{$p->name}}</option>
      				@endforeach
      			</select>
			</div>
			<div class="btn-group col-xs-12 nopadding">
				<button type="button" @click="addSite" class="btn btn-success col-xs-8">Save</button>
				<button class="btn btn-danger col-xs-4">Clear</button>
			</div>
		</div>	
	</form>
@endsection